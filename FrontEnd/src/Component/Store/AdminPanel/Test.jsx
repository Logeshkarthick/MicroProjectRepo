import React, { useState  } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Test = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState('');
  const [pieces, setPieces] = useState('');
  const [serves, setServes] = useState('');
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data)
    const formData = new FormData();
    // formData.append('name', name);
    // formData.append('description', description);
    // formData.append('price', price);
    // formData.append('weight', weight);
    // formData.append('pieces', pieces);
    // formData.append('serves', serves);
    formData.append('image', data.image[0]);

    axios.post('http://localhost:1818/chicken?name='+name+'&description='+description+'&price='+price+'&serves='+serves+'&pieces='+pieces+'&weight='+weight,formData )
   .then((response) => {
        console.log(response);
    })
   .catch((error) => {
        console.log(error);
    });
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pieces">Pieces:</label>
        <input
          type="text"
          id="pieces"
          value={pieces}
          onChange={(event) => setPieces(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pieces">Serves:</label>
        <input
          type="text"
          id="pieces"
          value={serves}
          onChange={(event) => setServes(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
        {...register("image")}
          type= 'file'
          id="image"
         
          
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;