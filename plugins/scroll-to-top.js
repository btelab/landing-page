export default ({ app }) => {
    app.router.afterEach(() => {
      window.scrollTo(0, 0);
    });
  };