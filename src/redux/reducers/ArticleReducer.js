const initialState = {
    articles: [
        {id:1 , title: 'New Article'}
    ],
    selectedArticle: null
};

const ArticleReducer = (state = initialState, action) => {
    return state
};

export { ArticleReducer }