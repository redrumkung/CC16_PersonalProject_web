import useAuth from "../../../hooks/use-auth";

export default function ProtectedIsLogin({ children }) {
    const { authUser } = useAuth();

    if (!authUser) {
        return null; // ไม่แสดงเนื้อหาใน children ถ้าผู้ใช้ยังไม่ได้เข้าสู่ระบบ
    }

    return children; // แสดงเนื้อหาใน children ถ้าผู้ใช้เข้าสู่ระบบแล้ว
}