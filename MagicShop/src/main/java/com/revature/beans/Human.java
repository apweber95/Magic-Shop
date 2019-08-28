package com.revature.beans;

import javax.persistence.Column;
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
@Table
public class Human {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "human")
	@SequenceGenerator(name = "human", sequenceName = "human_seq", allocationSize = 1)
	private String userID;
	private String username;
	private String password;
	@Column(name = "Firstname")
	private String first;
	@Column(name = "Lastname")
	private String last;
	private int roleID;
	private int gold;
	private int perception;
	private int stealth;
	private int luck;

	public Human() {
		super();
	}

	public Human(String userID, String username, String password, String first, String last, int roleID, int gold,
			int perception, int stealth, int luck) {
		super();
		this.userID = userID;
		this.username = username;
		this.password = password;
		this.first = first;
		this.last = last;
		this.roleID = roleID;
		this.gold = gold;
		this.perception = perception;
		this.stealth = stealth;
		this.luck = luck;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirst() {
		return first;
	}

	public void setFirst(String first) {
		this.first = first;
	}

	public String getLast() {
		return last;
	}

	public void setLast(String last) {
		this.last = last;
	}

	public int getRoleID() {
		return roleID;
	}

	public void setRoleID(int roleID) {
		this.roleID = roleID;
	}

	public int getGold() {
		return gold;
	}

	public void setGold(int gold) {
		this.gold = gold;
	}

	public int getPerception() {
		return perception;
	}

	public void setPerception(int perception) {
		this.perception = perception;
	}

	public int getStealth() {
		return stealth;
	}

	public void setStealth(int stealth) {
		this.stealth = stealth;
	}

	public int getLuck() {
		return luck;
	}

	public void setLuck(int luck) {
		this.luck = luck;
	}

	@Override
	public String toString() {
		return "Human [userID=" + userID + ", username=" + username + ", password=" + password + ", first=" + first
				+ ", last=" + last + ", roleID=" + roleID + ", gold=" + gold + ", perception=" + perception
				+ ", stealth=" + stealth + ", luck=" + luck + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((first == null) ? 0 : first.hashCode());
		result = prime * result + gold;
		result = prime * result + ((last == null) ? 0 : last.hashCode());
		result = prime * result + luck;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + perception;
		result = prime * result + roleID;
		result = prime * result + stealth;
		result = prime * result + ((userID == null) ? 0 : userID.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
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
		Human other = (Human) obj;
		if (first == null) {
			if (other.first != null)
				return false;
		} else if (!first.equals(other.first))
			return false;
		if (gold != other.gold)
			return false;
		if (last == null) {
			if (other.last != null)
				return false;
		} else if (!last.equals(other.last))
			return false;
		if (luck != other.luck)
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (perception != other.perception)
			return false;
		if (roleID != other.roleID)
			return false;
		if (stealth != other.stealth)
			return false;
		if (userID == null) {
			if (other.userID != null)
				return false;
		} else if (!userID.equals(other.userID))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

}
