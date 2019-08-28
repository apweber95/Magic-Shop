package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Backpack")
public class BackpackItem {
	@Id
	@SequenceGenerator(name = "backpack", sequenceName = "backpack_seq", allocationSize = 1)
	@GeneratedValue(generator = "backpack", strategy = GenerationType.SEQUENCE)
	private int backpackID;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "OwnerID")
	private Human ownerID;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ItemID")
	private Item itemID;
	private int stock;

	public BackpackItem() {
		super();
	}

	public BackpackItem(int backpackID, Human ownerID, Item itemID, int stock) {
		super();
		this.backpackID = backpackID;
		this.ownerID = ownerID;
		this.itemID = itemID;
		this.stock = stock;
	}

	public int getBackpackID() {
		return backpackID;
	}

	public void setBackpackID(int backpackID) {
		this.backpackID = backpackID;
	}

	public Human getOwnerID() {
		return ownerID;
	}

	public void setOwnerID(Human ownerID) {
		this.ownerID = ownerID;
	}

	public Item getItemID() {
		return itemID;
	}

	public void setItemID(Item itemID) {
		this.itemID = itemID;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	@Override
	public String toString() {
		return "BackpackItem [backpackID=" + backpackID + ", ownerID=" + ownerID + ", itemID=" + itemID + ", stock="
				+ stock + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + backpackID;
		result = prime * result + ((itemID == null) ? 0 : itemID.hashCode());
		result = prime * result + ((ownerID == null) ? 0 : ownerID.hashCode());
		result = prime * result + stock;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BackpackItem other = (BackpackItem) obj;
		if (backpackID != other.backpackID)
			return false;
		if (itemID == null) {
			if (other.itemID != null)
				return false;
		} else if (!itemID.equals(other.itemID))
			return false;
		if (ownerID == null) {
			if (other.ownerID != null)
				return false;
		} else if (!ownerID.equals(other.ownerID))
			return false;
		if (stock != other.stock)
			return false;
		return true;
	}

}
