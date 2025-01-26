package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import javax.xml.namespace.QName;
import java.net.URL;
import java.util.Map;
import java.util.Scanner;

import com.fasterxml.jackson.databind.JsonNode;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

public class XmlToJsonExample {

    public static void main(String[] args) {
        try {
            // Step 1: Create an HttpClient
            HttpClient client = HttpClient.newHttpClient();

            // Step 2: Create a request to the API endpoint that returns XML
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://www.w3schools.com/xml/note.xml")) // Example XML API
                    .GET()
                    .build();

            // Step 3: Send the request and get the response
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            String xmlResponse = response.body();

            System.out.println("XML Response:");
            System.out.println(xmlResponse);

            // Step 4: Convert XML to JSON
            XmlMapper xmlMapper = new XmlMapper();
            JsonNode jsonNode = xmlMapper.readTree(xmlResponse.getBytes());

            // Step 5: Print JSON output
            System.out.println("\nJSON Output:");
            System.out.println(jsonNode.toPrettyString());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
