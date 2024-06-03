package com.ock.repo;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.ock.entity.Items;

public interface ItemsDao {
			
	public boolean addItems(Items items);
	
	public List<Items> getItems();
	
	public boolean deleteItems(int itemId);
	
	public boolean handleUpload(String itemName,  String description, String pieces, String serves, double price, int kitchen, MultipartFile image) throws IOException;
	
	
	public boolean deleteByItemId(int itemId);
}
