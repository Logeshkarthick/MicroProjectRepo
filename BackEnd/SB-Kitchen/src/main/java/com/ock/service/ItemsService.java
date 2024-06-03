package com.ock.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.ock.entity.Items;

public interface ItemsService {
	
	
	public boolean addItems(Items items);
	
	public List<Items> getItems();
	
	public boolean deleteItems(int itemId);
	
	public boolean handleUpload(String itemName,  String description, String pieces, String serves, double price, int kitchen, MultipartFile image) throws IOException;


}
