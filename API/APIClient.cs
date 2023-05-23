using System.Net.Http.Headers;

namespace reactnet;

public class APIClient
{
    //Base HTTP client for every HTTP request
    public static HttpClient ApiClient { get; set;}

    public static void IntitaliseClient()
    {
        ApiClient = new HttpClient();
        ApiClient.DefaultRequestHeaders.Accept.Clear();
        ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    }
}