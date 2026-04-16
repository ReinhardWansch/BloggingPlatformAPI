#!/usr/bin/env node

// Setze im Terminal die Umgebungsvariablen GITHUB_TOKEN, GITHUB_OWNER und GITHUB_REPO.
// Starte danach das Skript
// Wenn du sicher gehen willst, führe zuerst einen Dry-Run aus.

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ISSUES_FILE = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, 'issues.json');


const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO; 
const token = process.env.GITHUB_TOKEN;
const dryRun = process.argv.includes('--dry-run');

function printUsage() {
  console.log(`
Verwendung:
  Bash/Zsh:
    export GITHUB_TOKEN="dein_token"
    export GITHUB_OWNER="dein_github_name"
    export GITHUB_REPO="BloggingPlatformAPI"
    node dev/create-github-issues.js  

  PowerShell:
    $env:GITHUB_TOKEN="dein_token"
    $env:GITHUB_OWNER="dein_github_name"
    $env:GITHUB_REPO="BloggingPlatformAPI"
    node dev/create-github-issues.js

Optional:
  node dev/create-github-issues.js ./dev/issues.json --dry-run
`);
}

function readIssues(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Die Datei wurde nicht gefunden: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error('Die issues.json muss ein JSON-Array enthalten.');
  }

  return parsed;
}

function createIssue({ owner, repo, token, issue }) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      title: issue.title,
      body: issue.body,
      labels: issue.labels || []
    });

    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}/issues`,
      method: 'POST',
      headers: {
        'User-Agent': 'github-issues-script',
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const statusOk = res.statusCode >= 200 && res.statusCode < 300;
        const response = data ? JSON.parse(data) : {};

        if (!statusOk) {
          reject(
            new Error(
              `Fehler ${res.statusCode}: ${response.message || 'Unbekannte GitHub-API-Antwort'}`
            )
          );
          return;
        }

        resolve(response);
      });
    });

    req.on('error', (error) => reject(error));
    req.write(body);
    req.end();
  });
}

async function main() {
  if (!owner || !repo || !token) {
    console.error('Fehlende Umgebungsvariablen: GITHUB_OWNER, GITHUB_REPO oder GITHUB_TOKEN.');
    printUsage();
    process.exit(1);
  }

  const issues = readIssues(ISSUES_FILE);

  console.log(`Es wurden ${issues.length} Issues in ${ISSUES_FILE} gefunden.`);

  for (const [index, issue] of issues.entries()) {
    if (!issue.title || !issue.body) {
      console.warn(`Issue ${index + 1} wurde übersprungen, weil title oder body fehlt.`);
      continue;
    }

    if (dryRun) {
      console.log(`[DRY RUN] ${index + 1}. ${issue.title}`);
      continue;
    }

    try {
      const created = await createIssue({ owner, repo, token, issue });
      console.log(`✓ #${created.number} erstellt: ${created.title}`);
      console.log(`  ${created.html_url}`);
    } catch (error) {
      console.error(`✗ Fehler bei "${issue.title}": ${error.message}`);
    }
  }
}

main().catch((error) => {
  console.error('Unerwarteter Fehler:', error.message);
  process.exit(1);
});
