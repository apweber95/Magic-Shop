package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role")
	@SequenceGenerator(name = "role", sequenceName = "role_seq", allocationSize = 1)
	private int roleID;
	private String roleName;
	
	
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getRoleID() {
		return roleID;
	}
	public void setRoleID(int roleID) {
		this.roleID = roleID;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + roleID;
		result = prime * result + ((roleName == null) ? 0 : roleName.hashCode());
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
		Role other = (Role) obj;
		if (roleID != other.roleID)
			return false;
		if (roleName == null) {
			if (other.roleName != null)
				return false;
		} else if (!roleName.equals(other.roleName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Role [roleID=" + roleID + ", roleName=" + roleName + "]";
	}
	
	
	
}
