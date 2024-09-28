import { Image, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const SponsorItem = ({ img, href }) => {
    return (
        <Link
            href={href}
            target='_blank'
            as={motion.a}
            opacity={0.5}
            whileHover={{ scale: 1.05, opacity: 1 }}
        >
            <Image src={img} h={{ base: 6, md: 7, lg: 8 }} />
        </Link>
    );
};

export default SponsorItem;
