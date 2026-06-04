import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./services/userService";

interface User {
  id?: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [form, setForm] = useState<User>({
    name: "",
    email: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateUser(editingId, form);
    } else {
      await createUser(form);
    }

    setForm({
      name: "",
      email: "",
    });

    setEditingId(null);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <button type="submit">{editingId ? "Update" : "Create"}</button>
      </form>

      <hr />

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button
            onClick={() => {
              setEditingId(user.id!);
              setForm({
                name: user.name,
                email: user.email,
              });
            }}
          >
            Edit
          </button>

          <button
            onClick={async () => {
              await deleteUser(user.id!);
              fetchUsers();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
