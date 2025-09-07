import { BookingsManagement } from "@/components/admin/bookings-management"
import { AdminLayout } from "@/components/admin/admin-layout"

export default function AdminBookingsPage() {
  return (
    <AdminLayout>
      <BookingsManagement />
    </AdminLayout>
  )
}
