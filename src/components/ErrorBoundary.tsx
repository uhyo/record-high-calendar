import React from "react";
import classes from "./ErrorBoundary.module.css";

export class ErrorBoundary extends React.Component<{}, { error?: unknown }> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  override componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error(error, errorInfo);
  }

  override render() {
    if (this.state.error !== undefined) {
      return <div className={classes.error}>{String(this.state.error)}</div>;
    }

    return this.props.children;
  }
}
