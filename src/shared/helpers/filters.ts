export default {
  filteredDate(d: string) {
    const theDate = new Date(d);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      theDate
    );
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
      theDate
    );
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
      theDate
    );
    return `${da}-${mo}-${ye}`;
  }
};
