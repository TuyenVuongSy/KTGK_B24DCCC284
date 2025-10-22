import { Post } from '../interfaces/Post';

export const initialPosts: Post[] = [
    {
        id: '1',
        title: 'Khám phá React 19: Những tính năng mới',
        author: 'Admin',
        content: 'React 19 sắp ra mắt với nhiều tính năng hấp dẫn như React Compiler, Actions và nhiều cải tiến về performance. Bài viết này sẽ đi sâu vào từng tính năng và cách chúng thay đổi cách chúng ta xây dựng ứng dụng React. React Compiler hứa hẹn sẽ tự động tối ưu hóa code của bạn mà không cần `useMemo` hay `useCallback`.',
        thumbnailUrl: 'https://tse4.mm.bing.net/th/id/OIP.WtftpRL3ai13if2rv-KlhQHaDt?pid=Api&P=0&h=220',
        category: 'Công nghệ',
        createdAt: new Date('2025-10-20T10:00:00Z').toISOString(),
    },
    {
        id: '2',
        title: 'Cẩm nang du lịch Hà Giang: Mùa hoa tam giác mạch',
        author: 'TravelLover',
        content: 'Hà Giang, mảnh đất địa đầu tổ quốc, luôn đẹp nao lòng mỗi độ thu về. Mùa hoa tam giác mạch (thường vào tháng 10-12) là thời điểm lý tưởng nhất để khám phá cao nguyên đá. Đừng quên ghé thăm cột cờ Lũng Cú, đèo Mã Pí Lèng và sông Nho Quế nhé!',
        thumbnailUrl: 'https://media.mia.vn/uploads/blog-du-lich/chiem-nguong-mua-hoa-tam-giac-mach-ha-giang-cuc-lang-man-1669146805.jpg',
        category: 'Du lịch',
        createdAt: new Date('2025-10-18T14:30:00Z').toISOString(),
    },
    {
        id: '3',
        title: 'Hướng dẫn làm Phở Bò Hà Nội chuẩn vị',
        author: 'Đầu BếpTại Gia',
        content: 'Phở bò là tinh hoa ẩm thực Hà Nội. Để có một bát phở ngon, khâu quan trọng nhất là nước dùng. Nước dùng phải được ninh từ xương bò, thêm gừng, hành nướng, quế, hồi... Bài viết sẽ hướng dẫn chi tiết từng bước để bạn có thể tự làm tại nhà.',
        thumbnailUrl: 'https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg',
        category: 'Ẩm thực',
        createdAt: new Date('2025-10-15T08:00:00Z').toISOString(),
    },
    {
        id: '4',
        title: 'TypeScript: Tại sao nên dùng?',
        author: 'DevPro',
        content: 'TypeScript là một superset của JavaScript, bổ sung thêm hệ thống kiểu tĩnh. Việc sử dụng TypeScript giúp phát hiện lỗi sớm ngay trong quá trình code, cải thiện khả năng bảo trì và làm cho code dễ đọc hơn, đặc biệt với các dự án lớn.',
        thumbnailUrl: 'https://tse3.mm.bing.net/th/id/OIP.FmhqLoHtPPGJ74YF9UPiIQHaEK?pid=Api&P=0&h=220',
        category: 'Công nghệ',
        createdAt: new Date('2025-10-12T11:20:00Z').toISOString(),
    },
    {
        id: '5',
        title: '5 mẹo quản lý thời gian hiệu quả',
        author: 'LifeHacker',
        content: 'Quản lý thời gian là kỹ năng quan trọng trong công việc và cuộc sống. Một số mẹo hữu ích bao gồm: sử dụng ma trận Eisenhower (khẩn cấp/quan trọng), kỹ thuật Pomodoro, lập kế hoạch hàng ngày và học cách nói "không" với những việc không cần thiết.',
        thumbnailUrl: 'https://tse4.mm.bing.net/th/id/OIP.gjcwDo0rLM9b8hy46AxwtwHaEo?pid=Api&P=0&h=220',
        category: 'Đời sống',
        createdAt: new Date('2025-10-10T09:00:00Z').toISOString(),
    },
];