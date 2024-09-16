import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${HOST}:${PORT}/api/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                navigate('/login');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="center">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            name="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button style={{ marginTop: "2em", width: "100%" }} type="submit" disabled={loading}>
                            {loading ? "Password resetting..." : "Reset Password"}
                        </button>
                    </form>
                    <Toaster />
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
