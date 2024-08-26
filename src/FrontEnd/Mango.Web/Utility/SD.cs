namespace Mango.Web.Utility
{
    public enum ApiType
    {
        GET,
        POST,
        PUT,
        DELETE
    }

    public class SD
    {
        public static string CouponAPIBase { get; set; }
        public static string AuthAPIBase { get; set; }
    }
}