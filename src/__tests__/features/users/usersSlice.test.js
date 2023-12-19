import userReducer,{ selectAllUsers } from "../../../features/users/usersSlice";

describe('userSlice reducer', () => {
  it('should return the initial state', () => {
    const initialState = [
      { id: "0", name: "Bindu Patil" },
      { id: "1", name: "Your Name" },
      { id: "2", name: "Content Creator" },
    ];

    const result = userReducer(undefined, {});

    expect(result).toEqual(initialState);
  });
});

describe('selectAllUsers selector', () => {
  it('should select all users from the state', () => {
    const state = {
      users: [
        { id: "0", name: "Bindu Patil" },
        { id: "1", name: "Your Name" },
        { id: "2", name: "Content Creator" },
      ],

    };

    const selectedUsers = selectAllUsers(state);

    expect(selectedUsers).toEqual(state.users);
  });
});
