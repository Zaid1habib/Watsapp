const SearchReducer = (state = '', action) => {
  if (action.type === 'Search') {
    console.log(action.payload, ' this is text from redu  cer');

    return (state = action.payload);
  } else {
    return state;
  }
};

export default SearchReducer;
