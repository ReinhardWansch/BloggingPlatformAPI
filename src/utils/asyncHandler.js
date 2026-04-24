// In asyncHandler.js steht eine kleine Wrapper-Funktion, die asynchrone Express-Handler umschliesst und aufgetretene Fehler automatisch an `next(err)` weitergibt, damit sie zentral im Error-Middleware-Handler verarbeitet werden.

export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};