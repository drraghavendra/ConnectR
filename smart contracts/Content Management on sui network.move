import Sui

struct ClubhousePost {
  author: Address,
  content: String,
  timestamp: u64,
  likes: u64,
  comments: vector<Comment>,
}

struct Comment {
  author: Address,
  content: String,
  timestamp: u64,
}

struct ClubhouseRoom {
  name: String,
  description: String,
  moderators: vector<Address>,
  posts: vector<ClubhousePost>,
}

struct Clubhouse {
  rooms: vector<ClubhouseRoom>,
}

impl Clubhouse {
  // Create a new clubhouse.
  public fun new() -> Clubhouse {
    Clubhouse { rooms: [] }
  }

  // Create a new room.
  public fun create_room(name: String, description: String, moderators: vector<Address>) -> ClubhouseRoom {
    ClubhouseRoom {
      name: name,
      description: description,
      moderators: moderators,
      posts: [],
    }
  }

  // Join a room.
  public fun join_room(room: &ClubhouseRoom) {
    // TODO: Implement room joining logic.
  }

  // Leave a room.
  public fun leave_room(room: &ClubhouseRoom) {
    // TODO: Implement room leaving logic.
  }

  // Create a new post in a room.
  public fun create_post(room: &ClubhouseRoom, content: String) -> ClubhousePost {
    ClubhousePost {
      author: Sui.sender(),
      content: content,
      timestamp: Sui.timestamp(),
      likes: 0,
      comments: [],
    }
  }

  // Like a post.
  public fun like_post(post: &ClubhousePost) {
    post.likes = post.likes + 1;
  }

  // Unlike a post.
  public fun unlike_post(post: &ClubhousePost) {
    if (post.likes > 0) {
      post.likes = post.likes - 1;
    }
  }

  // Comment on a post.
  public fun comment_on_post(post: &ClubhousePost, content: String) -> Comment {
    Comment {
      author: Sui.sender(),
      content: content,
      timestamp: Sui.timestamp(),
    }
  }
}
