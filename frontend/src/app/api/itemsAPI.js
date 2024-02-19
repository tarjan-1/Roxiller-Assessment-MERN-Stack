const baseURL = "http://localhost:3000/api/v1";

export const getAllItems = async (month) => {
  const res = await fetch(`${baseURL}/transactions?month=${month}`);
  const data = await res.json();

  return data;
};

export const getBySearchnMonth = async (searchItem, month) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/transactions/?search=${searchItem}&month=${month}`
  );
  const data = await res.json();

  return data;
};

export const getByPagenPerPage = async (searchItem, month, page) => {
  // Filtering transactions based on page
  if (page && page == 0) {
    page = 1;
  }
  const res = await fetch(
    `http://localhost:3000/api/v1/transactions/?search=${searchItem}&month=${month}&page=${page}`
  );
  const data = await res.json();

  return data;
};
