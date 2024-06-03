package com.ock.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ock.entity.Items;
import com.ock.repo.ItemsDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ItemsServiceImpl implements ItemsService{
	
	@Autowired
	ItemsDao idao;

	@Override
	public boolean addItems(Items items) {
		return idao.addItems(items);
	}

	@Override
	public List<Items> getItems() {
		return idao.getItems();
	}
	
	@Override
	public boolean deleteItems(int itemId) {
		return idao.deleteItems(itemId);
	}

	@Override
	public boolean handleUpload(String itemName, String description, String pieces, String serves, double price,
			int kitchen, MultipartFile image) throws IOException {
		
		return idao.handleUpload(itemName, description, pieces, serves, price, kitchen, image);
	}

}
