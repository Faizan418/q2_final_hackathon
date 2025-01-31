'use client';
import Link from 'next/link';
import { useState } from 'react';
import LandingHeader from '../../../components/LandingHeader/LandingHeader';
import LandingNavbar from '../../../components/LandingNavbar/LandingNavbar';

export default function LandingPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <LandingNavbar/>
            <LandingHeader/>
        
        </div>
    );
}
