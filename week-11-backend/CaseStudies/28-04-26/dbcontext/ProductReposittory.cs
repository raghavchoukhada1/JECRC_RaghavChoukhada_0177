public class ProductReposittory : IProductRepositories
{
    private readonly AppDbContext _context;

    public ProductReposittory(AppDbContext context)
    {
        _context = context;
    }

    public Task<int> CreateAsync(ProductRequestDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<ProductRequestDto>> GetAllAysync()
    {
        throw new NotImplementedException();
    }

    public Task<ProductRequestDto> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> UpdateAsync(int id, ProductRequestDto dto)
    {
        throw new NotImplementedException();
    }
}