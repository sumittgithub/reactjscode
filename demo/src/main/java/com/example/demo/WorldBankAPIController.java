package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WorldBankAPIController {

    private static final String API_URL = "https://search.worldbank.org/api/v3/wds?format=xml&qterm=wind%20turbine&fl=docdt,count";

    @GetMapping("/fetch-xml-response")
    public String fetchXmlResponse() {
        try {
            // Use RestTemplate to make the HTTP call
            RestTemplate restTemplate = new RestTemplate();
            
            // Fetch the response from the API as a String
            String response = restTemplate.getForObject(API_URL, String.class);
            
            // Return the response
            return response;
        } catch (Exception e) {
            // Handle exceptions and return an error message
            e.printStackTrace();
            return "Error fetching the XML response: " + e.getMessage();
        }
    }
}
