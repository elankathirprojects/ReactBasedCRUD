import { useState } from "react";
import {
  Container,
  Button,
  Pagination,
  Stack,
  TextField
} from "@mui/material";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import { useUsers } from "../hooks/useUsers";

function UsersPage() {
  const { users, addUser, updateUser, removeUser } = useUsers();

  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Search
  const [search, setSearch] = useState("");

  // Filter users
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // reset page when searching
  };

  const handleSubmit = (data) => {
    if (editingUser) {
      updateUser(editingUser.id, data);
    } else {
      addUser(data);
      setPage(1);
    }
    setOpen(false);
    setEditingUser(null);
  };

  return (
    <Container>
      <h2>User Management React-based CRUD</h2>

      {/* Search + Add button */}
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="Search user"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
        />

        <Button variant="contained" onClick={() => setOpen(true)}>
          Add User
        </Button>
      </Stack>

      <UserTable
        users={paginatedUsers}
        onEdit={(user) => {
          setEditingUser(user);
          setOpen(true);
        }}
        onDelete={removeUser}
      />

      {/* Pagination */}
      <Stack spacing={2} alignItems="center" mt={2}>
        <Pagination
          count={totalPages || 1}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>

      <UserForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        defaultValues={editingUser}
      />
    </Container>
  );
}

export default UsersPage;
