const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f909cafb2c2552aa92eaf33c60c2edde',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;