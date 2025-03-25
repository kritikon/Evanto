import Container from '../Container';
import Link from '../Link';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import CircleArrowIcon from '../../styles/assets/icons/arrowcircle.svg?react';
import { Box, Grid2, Typography, Button } from '@mui/material';

const interests = [
    { label: 'Art', icon: '🎨' },
    { label: 'Design', icon: '🎯' },
    { label: 'Music', icon: '🎵' },
    { label: 'Sports', icon: '🏀' },
    { label: 'Food', icon: '🍔' },
    { label: 'Travel', icon: '🌍' },
    { label: 'Hangout', icon: '🎉' },
    { label: 'Knowledge', icon: '📖' },
    { label: 'Camping', icon: '🏕️' },
    { label: 'Workshop', icon: '🛠️' },
    { label: 'Trekking', icon: '🥾' },
    { label: 'Comedy', icon: '😂' },
];

function ChooseYourInterests() {
    return (
        <Container>
            <Box className="'self-start flex grow flex-col gap-2">
                <CircleArrowIcon className='mb-10' />
                <Typography variant='h3'>Choose Your Interests</Typography>
                <Typography variant='body1'>You are able to select multiple categories</Typography>
            </Box>
            <Grid2 container spacing={1} wrap='wrap'>
                {interests.map(interest => (
                    <Grid2 key={interest.label} size={4}>
                        <Button
                            variant='outlined'
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                border: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textTransform: 'none',
                                backgroundColor: '#f5f5f5',
                            }}
                        >
                            <span style={{ fontSize: 24 }}>{interest.icon}</span>
                            <Typography variant='body2'>{interest.label}</Typography>
                        </Button>
                    </Grid2>
                ))}
            </Grid2>
            <Button variant='contained' className='mt-6'>
                Continue
            </Button>
            <Link href='/'>Skip</Link>
        </Container>
    );
}

export default ChooseYourInterests;
