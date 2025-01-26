package com.example.demo;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class WorldBankApiFetcher {
    public static void main(String[] args) {
        // API endpoint with XML format specified
        String apiUrl = "https://search.worldbank.org/api/v3/wds?format=xml&qterm=wind%20turbine&fl=docdt,count";
        
        try {
            // Create a URL object
            URL url = new URL(apiUrl);
            
            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            
            // Set the HTTP request method
            connection.setRequestMethod("GET");
            
            // Set request headers if needed (e.g., User-Agent)
            connection.setRequestProperty("User-Agent", "Mozilla/5.0");
            
            // Get the response code
            int responseCode = connection.getResponseCode();
            
            if (responseCode == HttpURLConnection.HTTP_OK) { // HTTP 200 OK
                // Read the response using BufferedReader
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;
                
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                
                reader.close();
                
                // Print the XML response
                System.out.println("XML Response:");
                System.out.println(response.toString());
            } else {
                System.out.println("HTTP Request failed. Response Code: " + responseCode);
            }
            
            // Disconnect the connection
            connection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
