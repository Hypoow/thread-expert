const apiService = (() => {
  const API_BASE = 'https://forum-api.dicoding.dev/v1';

  // Menyimpan token akses ke localStorage
  function storeAccessToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Mengambil token akses dari localStorage
  function retrieveAccessToken() {
    return localStorage.getItem('authToken');
  }

  // Melakukan fetch dengan otorisasi
  async function fetchWithAuthorization(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${retrieveAccessToken()}`,
      },
    });
  }

  // users
  // Mendaftarkan pengguna baru
  async function signUp({ name, email, password }) {
    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.user;
  }

  // Melakukan login pengguna
  async function signIn({ email, password }) {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.token;
  }

  // Mendapatkan profil pengguna yang sedang login
  async function fetchUserProfile() {
    const response = await fetchWithAuthorization(`${API_BASE}/users/me`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.user;
  }

  // Mendapatkan semua pengguna
  async function fetchAllUsers() {
    const response = await fetch(`${API_BASE}/users`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.users;
  }

  // threads
  // Membuat thread baru
  async function createNewThread({ title, body, category = 'General' }) {
    const response = await fetchWithAuthorization(`${API_BASE}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, category }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.thread;
  }

  // Mendapatkan semua thread
  async function fetchAllThreads() {
    const response = await fetch(`${API_BASE}/threads`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.threads;
  }

  // Mendapatkan detail thread berdasarkan ID
  async function fetchThreadDetails(id) {
    const response = await fetch(`${API_BASE}/threads/${id}`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.detailThread;
  }

  // comments
  // Membuat komentar baru pada thread tertentu
  async function postComment({ content, threadId }) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.comment;
  }

  // votes
  // Memberi upvote pada thread
  async function upVoteThread(threadId) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/up-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.vote;
  }

  // Memberi downvote pada thread
  async function downVoteThread(threadId) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/down-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.vote;
  }

  // Menetralisir vote pada thread
  async function neutralizeVoteOnThread(threadId) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/neutral-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.vote;
  }

  // Memberi upvote pada komentar
  async function upVoteComment(threadId, commentId) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.vote;
  }

  // Memberi downvote pada komentar
  async function downVoteComment(threadId, commentId) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.vote;
  }

  // Menetralisir vote pada komentar
  async function neutralizeVoteOnComment(threadId, commentId) {
    const response = await fetchWithAuthorization(
      `${API_BASE}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.vote;
  }

  // leaderboards
  // Mendapatkan data leaderboard
  async function fetchLeaderboards() {
    const response = await fetch(`${API_BASE}/leaderboards`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data.leaderboards;
  }

  return {
    storeAccessToken,
    retrieveAccessToken,
    signUp,
    signIn,
    fetchUserProfile,
    fetchAllUsers,
    createNewThread,
    fetchAllThreads,
    fetchThreadDetails,
    postComment,
    upVoteThread,
    downVoteThread,
    neutralizeVoteOnThread,
    upVoteComment,
    downVoteComment,
    neutralizeVoteOnComment,
    fetchLeaderboards,
  };
})();

export default apiService;
