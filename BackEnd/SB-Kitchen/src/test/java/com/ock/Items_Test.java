package com.ock;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ock.entity.Cart;
import com.ock.entity.Items;
import com.ock.service.ItemsService;

@SpringBootTest
public class Items_Test {
	
	@Autowired
	ItemsService Iso;
	
	@Test
	void test_findAllItems()
	{
		List<Items> item=Iso.getItems();
		assertNotNull(item);
	}
	
	}


