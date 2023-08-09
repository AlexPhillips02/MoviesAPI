using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace reactnet;

public class SearchResults
{
    public List<Movie>? Search { get; set; }
}

public class MovieProcessor
{
    public static async Task<Movie[]> LoadMovie(string title)
    {
        string url = "https://www.omdbapi.com/?apikey=1dfc3c06";

        url += "&s=" + title;

        Console.WriteLine(url);

        //Open new request using api client and wait for response
        //Within using will automatically closed
        using (HttpResponseMessage response = await APIClient.ApiClient.GetAsync(url))
        {
            if (response.IsSuccessStatusCode)
            {
                string json = await response.Content.ReadAsStringAsync();
                //use JavaScriptSerializer from System.Web.Script.Serialization
                //deserialize to your class
                //Console.WriteLine(data);
                SearchResults? results = JsonSerializer.Deserialize<SearchResults>(json);
                Movie[]? movies = results?.Search?.ToArray<Movie>();
                // Assign other properties of Movie as needed

                return movies;
            }
            else
            {
                throw new Exception(response.ReasonPhrase);
            }
        }
    }
}