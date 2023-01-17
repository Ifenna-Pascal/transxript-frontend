const StudentToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('student_data');
        if (!token) return null;
        else {
            return {token: JSON.parse(token)}
        }
    }

}

export default StudentToken;