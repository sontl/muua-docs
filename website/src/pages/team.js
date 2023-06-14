import React from 'react';
import Layout from '@theme/Layout';
import Profile from '../components/Profile';

const title = 'Đội ngũ';
const description =
  'Tại Muua, chúng tôi là một đội ngũ đa dạng với thành viên từ khắp nơi trên thế giới, chung niềm đam mê xây dựng một cách tiếp cận đơn giản hơn và mở hơn để trở thành một doanh nghiệp đáng tin cậy.';

function Team() {
  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>{title}</h1>
        </div>

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/son.png'}
            name={'Son Tran: CEO & Co-founder'}
            bio={`Sơn Trần, với hơn 15 năm kinh nghiệm chuyên sâu trong thiết kế, kiến trúc và phát triển các sản phẩm phần mềm phức tạp, đã tham gia vào nhiều dự án phát triển phần mềm có giá trị triệu đô tại Singapore và Việt Nam. Với sự đam mê và tài năng, anh đã thành lập công ty Muua. Sơn có sự am hiểu sâu sắc về quy trình phát triển phần mềm và đã thể hiện khả năng lãnh đạo tuyệt vời, dẫn dắt đội ngũ kỹ thuật và sản phẩm. Với sự sáng tạo và tầm nhìn, Sơn đang dẫn dắt Muua trên con đường thành công, mang đến những sản phẩm và giải pháp công nghệ đột phá trong ngành thương mại điện tử.`}
            subtitle={
              'Sáng tạo không giới hạn, vui vẻ vô tận. Một dòng code, một thế giới mới!'
            }
            github={'https://github.com/sontl'}
            twitter={'https://facebook.com/sontl'}
          ></Profile>

          <div className="col col--2 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/hue.jpg'}
            name={'Hue Tran: COO & Co-founder'}
            bio={`Là một nhà tư vấn doanh nghiệp đam mê về cách mạng số với tập trung tại khu vực Đông Nam Á, tôi có sứ mệnh cá nhân là đóng góp tích cực vào sự phát triển tiến bộ của xã hội thông qua cách mạng số, khả năng sử dụng công nghệ, sáng tạo và truyền đạt sức mạnh cho con người. Tại Facebook, tôi làm việc với các giám đốc truyền thông, giám đốc nhân sự, giám đốc điều hành số, giám đốc vận hành và nhiều ngành công nghiệp khác như viễn thông, ngân hàng, bảo hiểm, sản xuất, bán lẻ / thương mại điện tử, du lịch & vận tải, năng lượng & hóa chất, v.v. về cách mạng số qua giao tiếp, hợp tác và tự động hóa. Tôi viết blog về cách mạng số bằng tiếng Việt tại www.chuyendoi.so và cũng tham gia các hoạt động cách mạng số khác tại khu vực Đông Nam Á. Những điểm mạnh của tôi là ý tưởng sáng tạo, tốc độ học nhanh, đạt được kết quả, trách nhiệm và khả năng kết nối.`}
            twitter={'https://www.facebook.com/tran.hue.7'}
            linkedin={'https://www.linkedin.com/in/tranhue/'}
          ></Profile>

          <div className="col col--1 margin-bottom--lg"></div>
        </div>

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/kien.png'}
            name={'Trung Kiên: Senior Software Engineer'}
            bio={`Kiên là một kỹ sư phần mềm có kinh nghiệm, gia nhập đội ngũ sớm nhất. Với sự đam mê với "Web và JavaScript" và khả năng làm việc công nghệ full stack , anh ấy đã xây dựng sản phẩm tại các công ty khởi nghiệp giai đoạn sớm và trung gian. Kiên cũng có khả năng đảm nhiệm vai trò devops. Anh ấy tận hưởng việc nâng cao trải nghiệm của nhà phát triển và luôn tìm cách cải thiện nó. Với sự kết hợp giữa kinh nghiệm và đam mê của mình, Kiên là một thành viên quan trọng trong đội ngũ phát triển phần mềm.`}
            subtitle={
              'Kiên - Kỹ sư phần mềm đam mê Web, JavaScript và cải thiện trải nghiệm phát triển.;)'
            }
            linkedin={`https://www.linkedin.com/in/trungkien9877/`}
            github={`https://github.com/kien-vu`}
          ></Profile>
          <div className="col col--2 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/tien.png'}
            name={'Linh Hoàng: Senior Software Engineer'}
            bio={`Xin chào, hãy gặp Linh Hoàng - một kĩ sư đáng tin cậy và giàu kinh nghiệm trong lĩnh vực phát triển phần mềm. Với hơn 8 năm kinh nghiệm, Linh Hoàng đã xây dựng các ứng dụng cho cả các công ty khởi nghiệp và doanh nghiệp lớn. Trước khi gia nhập Muua, Linh Hoàng đã là đồng sáng lập và là trưởng nhóm kỹ thuật tại một công ty phát triển phần mềm, nơi anh đã dẫn dắt một đội ngũ gồm 25 thành viên.

            Linh Hoàng đã khám phá đam mê lập trình từ thời sinh viên và sự đam mê này đã ngày càng tăng lên theo thời gian. Anh luôn háo hức để học ngôn ngữ lập trình mới và đóng góp vào các dự án mã nguồn mở (OSS). Linh Hoàng rất thích nói về việc xây dựng các công ty khởi nghiệp, lập trình, OSS và thiên văn học.
            
            Với Linh Hoàng, không nơi nào tuyệt vời hơn localhost - một môi trường mà anh có thể sáng tạo và phát triển. Với kiến thức rộng rãi và sự đam mê mãnh liệt, Linh Hoàng là một nguồn cảm hứng cho đồng nghiệp và sẽ đóng góp tích cực vào môi trường làm việc của chúng ta.`}
            subtitle={`Đối với Linh Hoàng, không có nơi nào tốt hơn localhost.`}
            linkedin={`https://www.linkedin.com/in/linh-hoang-548a39127/`}
            github={`https://github.com/secretdeveloperisme`}
          ></Profile>
          <div className="col col--1 margin-bottom--lg"></div>
        </div>

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>
          <Profile
            img={'/img/team/khoi.png'}
            name={'Minh Khôi: Senior Software Engineer'}
            bio={`Hãy gặp Khôi - một kỹ sư phần mềm toàn diện với hơn 6 năm kinh nghiệm. Anh ấy đã phát triển các dApp, Microservices và cả sản phẩm của riêng mình. Khôi đã làm việc với nhiều ngôn ngữ và nền tảng khác nhau. Anh ấy đã từng làm việc trong các công ty đa quốc gia, quy mô trung bình và các công ty khởi nghiệp. Khôi thích học những công nghệ mới, viết blog và đào tạo sinh viên. Trong thời gian rảnh, anh ấy chơi cờ vua, đọc sách và xem loạt phim truyền hình.`}
            subtitle={`Có một cách dễ dàng và một cách khó. Phần khó là tìm cách dễ dàng.`}
            linkedin={`https://www.linkedin.com/in/minh-khoi-nguyen-689375118`}
            github={`https://github.com/MinhKhoiUET`}
          ></Profile>
          <div className="col col--2 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/an.png'}
            name={'Dieu An: Chuyên gia Hỗ trợ Cộng đồng'}
            bio={`Diệu An, một Chuyên gia Hỗ trợ Cộng đồng tài năng, đã xây dựng sự nghiệp của mình trong ngành thương mại điện tử. Với tình yêu đối với lập trình, cô đã quyết định chuyển hướng và trở thành một nhà phát triển full-stack JavaScript. Với sự sáng tạo của mình, Diệu An đã xây dựng một ứng dụng tiền điện tử tài chính cho trẻ em được vinh danh trong một cuộc thi nhóm. Hiện tại, cô đang làm việc tại Muua với vai trò là một chuyên gia Hỗ trợ Cộng đồng tài ba. Diệu An tận hưởng việc tương tác và hỗ trợ cộng đồng nhà sáng tạo nội dung và kinh doanh trực tuyến, đóng góp vào sự thành công và phát triển của Muua.`}
            subtitle={`Hãy làm điều bạn thích và bạn sẽ không phải làm việc nào trong đời.`}
            linkedin={'https://www.linkedin.com/in/carinne-pham-623979220'}
            twitter={'https://www.facebook.com/profile.php?id=100090420000251'}
          ></Profile>
          <div className="col col--1 margin-bottom--lg"></div>
        </div>
      </main>
    </Layout>
  );
}
export default Team;
