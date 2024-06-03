package com.ock.repo;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.ock.entity.Cart;
import com.ock.entity.Items;

import jakarta.persistence.EntityManager;

@Repository
public class ItemsDaoImpl implements ItemsDao {
    
	@Autowired
	EntityManager ent;
	
	
	@Override
	public boolean addItems(Items items) {
	    ent.persist(items);
		return true;
	}

	@Override
	public List<Items> getItems() {
			return ent.createQuery("from Items").getResultList();
		}
 
	@Override
	public boolean deleteItems(int id)
	{
	  Items it= ent.find(Items.class, id);
	   return true;
			   }

	@Override
	public boolean handleUpload(String itemName, String description, String pieces, String serves, double price,
			int kitchen, MultipartFile image) throws IOException {
			
		
		Items item = new Items();

		item.setItemName(itemName);
		item.setItemdescription(description);
		item.setPieces(pieces);
		item.setServes(serves);
		item.setPrice(price);
		
		byte[] imageBytes = Base64.getEncoder().encode(image.getBytes()); //Error Possibility
 		item.setImage(imageBytes);
 		
 		ent.persist(item);
		
		return true;
	}

	@Override
	public boolean deleteByItemId(int itemId) {
		
		
		Items obj = ent.find(Items.class, itemId);
		System.out.println(obj);
		ent.remove(obj);
		
		return true;
		
	}
	
	
	
}
