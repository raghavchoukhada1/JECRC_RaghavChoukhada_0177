public class IProductRepositories
{
    Task<IEnumerable<ProductRequestDto>> GetAllAysync();
    Task<ProductRequestDto> GetByIdAsync(int id);
    Task<int> CreateAsync(ProductRequestDto dto);
    Task<bool> UpdateAsync(int id, ProductRequestDto dto);
    Task<bool> DeleteAsync(int id);

}