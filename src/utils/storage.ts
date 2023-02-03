const myLocal = {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    try {
      const value = localStorage.getItem(key);
      if (value === "" || value === null || value === undefined) {
        return null;
      } else {
        return JSON.parse(value);
      }
    } catch (error) {
      return error;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};

const mySession = {
  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    try {
      const value = sessionStorage.getItem(key);
      if (value === null || value === undefined || value === "") {
        return null;
      } else {
        return JSON.parse(value);
      }
    } catch (error) {
      return error;
    }
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
};

export { myLocal, mySession };
