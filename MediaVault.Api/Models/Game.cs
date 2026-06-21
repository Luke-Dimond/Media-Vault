public class Game
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Developer { get; set;}
    public string? Publisher { get; set;}
    public DateOnly? ReleaseDate {get; set;}
}