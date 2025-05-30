export interface PulseKitUser {
    id?: string;
    externalId?: string;
    email?: string;
    name?: string;
    avatar?: string;
}

export interface Category {
    id: string;
    name: string;
    description?: string;
    color?: string;
    icon?: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Project {
    id: string;
    name: string;
    description: string | null;
    theme: string;
    createdAt: string;
    updatedAt: string;
}

export interface FeedbackItem {
    id: string;
    title: string;
    content: string;
    userId: string;
    createdAt: string;
    votes: {
        id: string;
        userId: string;
    }[];
    userVote?: number;
    comments: number;
    showComments?: boolean;
    newComment?: string;
    categories?: {
        category: Category;
    }[];
    user: {
        id: string;
        name: string;
        avatar: string;
        email: string;
    };
}

export interface FeedbackComment {
    id: string;
    content: string;
    userId: string;
    isOfficialResponse: boolean;
    representingClientUser: PulseKitUser;
    authorPlatformUser: PulseKitUser;
    createdAt: string;
    isStatusUpdate?: boolean;
    statusFrom?: string;
    statusTo?: string;
}