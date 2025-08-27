import hondaMT from "../../assets/img/hondaMT.png";
import hondaBks from "../../assets/img/hondaBekasi.png";
import scoJkt from "../../assets/img/scoJkt.png";
import scoBali from "../../assets/img/scoBali.png";
import scoBandung from "../../assets/img/scoBdg.png";
import scoBnjr from "../../assets/img/scoBnjr.png";
import scoMedan from "../../assets/img/scoMedan.png";
import scoMksr from "../../assets/img/scoMks.png";
import reAntasari from "../../assets/img/reAntasari.png";
import reBali from "../../assets/img/reBali.png";
import reBdg from "../../assets/img/reBandung.png";
import reBogor from "../../assets/img/reBogor.png";
import reDepok from "../../assets/img/reDepok.png";
import reSerpong from "../../assets/img/reSerpong.png";
import reSby from "../../assets/img/reSby.png";
import hyundaiBnjr from "../../assets/img/hyundaiBnjr.png";
import fordMt from "../../assets/img/fordMt.png";
import fordDepok from "../../assets/img/fordDepok.png";

const branchesData = {
    Honda: [
      {
        id: 1,
        name: 'Honda Nusantara MT Haryono',
        address: 'Jl. MT Haryono  Kav. 6, Kebon Baru, Tebet',
        city: 'Jakarta Selatan 12830',
        number: '+622183788888',
        email: 'info@honda-nusantara.com',
        image: hondaMT
      },
      {
        id: 2,
        name: 'Honda Nusantara Bekasi',
        address: 'Jl. Ahmad Yani No.10, Pekayon Jaya, Kec. Bekasi Sel.',
        city: 'Kota Bks, Jawa Barat 17148',
        number: '+622188950000',
        email: 'info@honda-nusantara.com',
        image: hondaBks
      },
    ],
    Scomadi: [
      {
        id: 1,
        name: 'Scomadi Jakarta',
        address: 'Jl. MT Haryono Kav.5, Tebet, Jakarta Selatan',
        city: 'DKI Jakarta, Indonesia 12830',
        number: '+622183788888',
        email: 'info@scomadi.co.id',
        image: scoJkt
      },
      {
        id: 2,
        name: 'Scomadi Bali',
        address: 'Jl. Bypass Ngurah Rai No.10, Kuta, Badung',
        city: 'Bali 80361',
        number: '+6282221323003',
        email: 'info@scomadi.co.id',
        image: scoBali
      },
      {
        id: 3,
        name: 'Scomadi Bandung',
        address: 'Jl. Pelajar Pejuang 45 No.61',
        city: 'Kota Bandung, Jawa Barat 40263',
        number: '+6281221930772',
        email: 'info@scomadi.co.id',
        image: scoBandung
      },
      {
        id: 4,
        name: 'Scomadi Banjarmasin',
        address: 'Jl. Ahmad Yani No.KM.3.5, No.134, RT.003/001, Karang Mekar',
        city: 'Banjarmasin, Kalsel 70234',
        number: '+6288247474460',
        email: 'info@scomadi.co.id',
        image: scoBnjr
      },
      {
        id: 5,
        name: 'Scomadi Medan',
        address: 'Jl. Gagak Hitam No.37, Sunggal',
        city: 'Kota Medan, Sumatera Utara 20128',
        number: '+6281361282636',
        email: 'info@scomadi.co.id',
        image: scoMedan
      },
      {
        id: 6,
        name: 'Scomadi Makassar',
        address: 'Jl. DR. Ratulangi No.89, Labuang Baji',
        city: 'Kota Makassar, Sulawesi Selatan 90132',
        number: '+6288247474660',
        email: 'info@scomadi.co.id',
        image: scoMksr
      },
    ],
    'Royal Enfield': [
      {
        id: 1,
        name: 'Royal Enfield Antasari',
        address: 'Jl. Pangeran Antasari No.19, Cipete Selatan, Cilandak',
        city: 'Jakarta Selatan, DKI Jakarta 12410',
        number: '+628119735566',
        email: 'hotlinere@nusantara-group.com',
        image: reAntasari
      },
      {
        id: 2,
        name: 'Royal Enfield Bali',
        address: 'Jl. Bypass Ngurah Rai No 29, Kuta',
        city: 'Badung - Bali 80361',
        number: '+6287888875111',
        email: 'cro@nusantara-royalenfield.com',
        image: reBali
      },
      {
        id: 3,
        name: 'Royal Enfield Bandung',
        address: 'Jl. Mohammad Toha No.30, Pungkur, Regol',
        city: 'Bandung, Jawa Barat 40252',
        number: '+6281383238609',
        email: 'nusantara.royalenfield@gmail.com',
        image: reBdg
      },
      {
        id: 4,
        name: 'Royal Enfield Bekasi',
        address: 'Ruko Sentra Niaga, Jl. Ahmad Yani, Blok A-6 No.6',
        city: 'Bekasi Selatan, Jawa Barat 17144',
        number: '+628119578099',
        email: 'nusantara.royalenfield@gmail.com',
        image: reBdg
      },
      {
        id: 5,
        name: 'Royal Enfield Bogor',
        address: 'Warung Jambu Tikungan, Jl. Pajajaran RT.003/006, Bantarjati',
        city: 'Bogor Utara, Bogor 18153',
        number: '+6281212858527',
        email: 'nusantara.royalenfield@gmail.com',
        image: reBogor
      },
      {
        id: 6,
        name: 'Royal Enfield Depok',
        address: 'Jl. Margonda Raya No.28, Kemiri Muka, Beji',
        city: 'Depok, Jawa Barat 16423',
        number: '+6281212858527',
        email: 'info.motor@nusantara-group.com',
        image: reDepok
      },
      {
        id: 7,
        name: 'Royal Enfield Serpong',
        address: 'Jl. Raya Serpong Kilometer 7, No. 18H, Pakulonan',
        city: 'Serpong Utara, Banten 15325',
        number: '+6281212858527',
        email: 'nusantara.royalenfield@gmail.com',
        image: reSerpong
      },
      {
        id: 8,
        name: 'Royal Enfield Surabaya',
        address: 'Jl. Sulawesi No. 73, Gubeng',
        city: 'Surabaya, Jawa Timur 60281',
        number: '+6282131321010',
        email: 'nusantara.royalenfield@gmail.com',
        image: reSby
      },
      {
        id: 9,
        name: 'Royal Enfield Yogyakarta',
        address: 'Jl. Parangtritis No.38, Mantrijeron',
        city: 'Yogyakarta 55143',
        number: '+6285727572068',
        email: 'nusantara.royalenfield@gmail.com',
        image: reSby
      },
    ],
    Hyundai: [
      {
        id: 1,
        name: 'Hyundai Banjarmasin',
        address: 'Jl. A. Yani No.499, RT.10, Pemurus Dalam, Kota Banjarmasin',
        city: 'Kalimantan Selatan 70248',
        number: '+625113271000',
        email: 'cro.hyundai.bjm@nusantara-group.com',
        image: hyundaiBnjr
      }
    ],
    Mercedes: [
      {
        id: 1,
        name: 'Mercedes Jakarta',
        address: 'Jl. Thamrin No. 1, Jakarta',
        city: 'Pusat, Indonesia 10310',
        number: '+625113271000',
        email: 'cro.hyundai.bjm@nusantara-group.com',
        image: hondaMT
      }
    ],
    Ford: [
      {
        id: 1,
        name: 'Ford MT Haryono',
        address: 'Jl. MT Haryono  Kav. 5, Kebon Baru, Tebet',
        city: 'Jakarta Selatan 12830',
        number: '+6285283984973',
        email: 'info@honda-nusantara.com',
        image: fordMt
      },
      {
        id: 2,
        name: 'Ford Depok',
        address: 'Jl. Margonda Raya No.28, Kemiri Muka, Beji',
        city: 'Depok, Jawa Barat 16423',
        number: '+6285283984973',
        email: 'info@honda-nusantara.com',
        image: fordDepok
      }
    ],
    Chevrolet: [
      {
        id: 1,
        name: 'Chevrolet Jakarta',
        address: 'Jl. HR Rasuna Said No. 12, Jakarta',
        city: 'Selatan, Indonesia 12950',
        number: '+625113271000',
        email: 'cro.hyundai.bjm@nusantara-group.com',
        image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      }
    ]
};

export default branchesData;