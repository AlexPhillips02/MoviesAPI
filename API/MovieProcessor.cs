using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace reactnet;

public class MovieProcessor
{
    public static async Task<Movie> LoadMovie(string title)
    {
        string url = "https://www.omdbapi.com/?apikey=1dfc3c06";

        if (title != "")
        {
            url += "&t=" + title;
        }

        //Open new request using api client and wait for response
        //Within using will automatically closed
        using (HttpResponseMessage response = await APIClient.ApiClient.GetAsync(url))
        {
            if (response.IsSuccessStatusCode)
            {
                string data = await response.Content.ReadAsStringAsync();
                //use JavaScriptSerializer from System.Web.Script.Serialization
                //deserialize to your class
                Movie? movie = JsonSerializer.Deserialize<Movie>(data);

                return movie;
            }
            else
            {
                throw new Exception(response.ReasonPhrase);
            }
        }
    }
}