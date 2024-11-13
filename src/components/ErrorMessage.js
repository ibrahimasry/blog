
"use client";

const ErrorMessage = ({ onRetry }) => (
  <div className="error">
    <p>Failed to fetch posts. Please try again.</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default ErrorMessage;
    