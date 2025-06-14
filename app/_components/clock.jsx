import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CLOCK_SIZE = 250;
const HAND_LENGTH = CLOCK_SIZE / 2 - 30;

const WORK_DURATION = 25 * 60 * 1000; // 25 minutes
const BREAK_DURATION = 5 * 60 * 1000; // 5 minutes

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

export default function PomodoroClock() {
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkSession, setIsWorkSession] = useState(true);
    const [elapsed, setElapsed] = useState(0);

    const intervalRef = useRef(null);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const SESSION_DURATION = isWorkSession ? WORK_DURATION : BREAK_DURATION;

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsed((prev) => {
                    const next = prev + 1000;
                    if (next >= SESSION_DURATION) {
                        switchSession();
                        return 0;
                    }
                    animatedValue.setValue(next / SESSION_DURATION);
                    return next;
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning, isWorkSession]);

    const switchSession = () => {
        setIsWorkSession((prev) => !prev);
        setElapsed(0);
        animatedValue.setValue(0);
    };

    const handleStartPause = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setElapsed(0);
        animatedValue.setValue(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sessionLabel}>
                {isWorkSession ? 'Work Session' : 'Break Time'}
            </Text>
            

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <AnimatedCircularProgress
                    size={150}
                    width={10}
                    fill={(elapsed / SESSION_DURATION) * 100} // Progress: 0 to 100
                    tintColor="red"
                    backgroundColor="#e0e0e0"
                >
                    {
                        (fill) => (
                            <Text style={styles.timeText}>
                                {formatTime(SESSION_DURATION - elapsed)}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.button} onPress={handleStartPause}>
                        <Text style={styles.buttonText}>
                            {isRunning ? 'Pause' : 'Start'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleReset}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sessionLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 16,
    },
    clock: {
        width: CLOCK_SIZE,
        height: CLOCK_SIZE,
        borderRadius: CLOCK_SIZE / 2,
        backgroundColor: '#fff',
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    face: {
        position: 'absolute',
        width: CLOCK_SIZE - 20,
        height: CLOCK_SIZE - 20,
        borderRadius: (CLOCK_SIZE - 20) / 2,
        borderWidth: 6,
        borderColor: '#e0e0e0',
        top: 10,
        left: 10,
    },
    hand: {
        position: 'absolute',
        width: 4,
        height: HAND_LENGTH,
        borderRadius: 2,
        top: CLOCK_SIZE / 2 - HAND_LENGTH,
        left: CLOCK_SIZE / 2 - 2,
    },
    centerDot: {
        position: 'absolute',
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#ff5252',
        top: CLOCK_SIZE / 2 - 9,
        left: CLOCK_SIZE / 2 - 9,
        borderWidth: 3,
        borderColor: '#fff',
    },
    timeText: {
        position: 'absolute',
        bottom: 24,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1.5,
    },
    controls: {
        flexDirection: 'row',
        gap: 16,
    },
    button: {
        backgroundColor: '#ff5252',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 24,
        marginHorizontal: 8,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
