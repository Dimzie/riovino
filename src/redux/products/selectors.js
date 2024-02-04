export const selectProducts = state => state.products.products;
export const selectProductById = state => state.products.productById;
export const selectCountByType = state => state.products.countByType;
export const selectVinosCount = state => state.products.vinosCount;
export const selectEspumososCount = state => state.products.espumososCount;
export const selectDestiladosCount = state => state.products.destiladosCount;
export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
