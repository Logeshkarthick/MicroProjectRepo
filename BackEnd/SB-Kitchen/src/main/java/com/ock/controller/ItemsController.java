package com.ock.controller;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ock.entity.Items;
import com.ock.service.ItemsService;

@RestController
@RequestMapping("api/rest/")
@CrossOrigin("http://localhost:3000")
public class ItemsController {

	@Autowired
	ItemsService is;

	public boolean doInsert(@RequestBody Items i) {
		return is.addItems(i);

	}

	@GetMapping("/Item")
	public List<Items> getItems() {
		return is.getItems();
	}

	@DeleteMapping("/deleteItem/{itemId}")
	public boolean deleteItem(@PathVariable("itemId") int itemId) {
		return is.deleteItems(itemId);
	}

	@PostMapping("/Item")
	public boolean handleItemUpload(@RequestParam("itemName") String itemName,
			@RequestParam("description") String description, @RequestParam("pieces") String pieces,
			@RequestParam("serves") String serves, @RequestParam("price") double price,
			@RequestParam("kitchen") int kitchen, @RequestParam("image") MultipartFile image) throws IOException {

		return is.handleUpload(itemName, description, pieces, serves, price, kitchen, image);

	}

}
