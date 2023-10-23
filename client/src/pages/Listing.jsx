import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';

export const Listing = () => {
    const params=useParams();
    SwiperCore.use([Navigation]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [listing, setListing] = useState(null);
    const { currentUser } = useSelector((state) => state.user);
    const fetchListing=async()=>{
        setLoading(true);
        await axios.get(`http://localhost:8800/api/listing/get/${params.listingId}`)
        .then((res)=>{
            if (res.status=200) {
                setLoading(false);
                setError(false)
                setListing(res.data.listing)
            }
            console.log(res);
            setLoading(false);
            setError(true)
        }).catch((err)=>{
            setLoading(false)
            setError(true)
        })
    }
    useEffect(()=>{
        fetchListing();
    },[params.listingId]);
    return (
        <div>
            {error?
            <p>err</p>
            :
            <p>not err</p>
            }
        </div>
    )
}
