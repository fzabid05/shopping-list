import React, { useState } from "react";

const AddListItem = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("veuillez ajouter un aliment/produit");
      return;
    }
    if (!quantity) {
      alert("veuillez ajouter sa disponibilité");
      return;
    }

    onAdd({ name, quantity });
    setName("");
    setQuantity("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Objet à acheté</label>
        <input
          type="text"
          placeholder="Ajouter un objet"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>disponibilité</label>
        <input
          type="range"
          min="0"
          max="100"
          step="25"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Enregitrer" />
      </div>
    </form>
  );
};

export default AddListItem;
