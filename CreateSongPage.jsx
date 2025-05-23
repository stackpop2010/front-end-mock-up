import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const AddSongPage = () => {

    const [title, settitle] = useState('');
    const [artist, setartist] = useState('');
    const [album, setalbum] = useState('');
    const [key, setkey] = useState('C');
    const [bpm, setbpm] = useState('');
    const [capo, setcapo] = useState('');
    const [difficulty, setdifficulty] = useState('');
    const [year, setyear] = useState('');

    const navigate = useNavigate();

    const addSong = async () => {
        const newSong = {title, artist, album, key, bpm, capo, difficulty, year}
        const response = await fetch(
            '/Songs', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newSong), 
            }
        );
        if(response.status===201){
            alert("Successfully added the Song");
        }else{
            alert("Failed to add Song, status code = " + response.status)
        }
        navigate('/')
    };

    return (
        <div>
        <h2>Log New Song Below</h2>
        <p>capo should be in MM-DD-YY format</p>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Key</th>
                    <th>BPM</th>
                    <th>Capo</th>
                    <th>Difficulty</th>
                    <th>Release Year</th>

                </tr>
            </thead>
            <tbody>
                
            <tr>
                <td>
            <input
                type="text"
                id="Song title"
                value={title}
                onChange={e => settitle(e.target.value)} />
                </td>
                <td>
            <input
                type="text"
                value={artist}
                onChange={e => setartist(e.target.value)} />
                </td>
                <td>
            <input
                type="text"
                value={album}
                onChange={e=> setalbum(e.target.value)} />
                </td>
                <td>
             <select
                type="text"
                value={key}
                onChange={e => setkey(e.target.value)} 
                >
                <option value = "C">C</option>
                <option value = "C#">C#</option>
                <option value = "D">D</option>
                <option value = "D#">D#</option>
                <option value = "E">E</option>
                <option value = "F">F</option>
                <option value = "F#">F#</option>
                <option value = "G">G</option>
                <option value = "G#">G#</option>
                <option value = "A">A</option>
                <option value = "A#">A#</option>
                <option value = "B">B</option>
                </select>
                </td>
                <td>
            <input
                type="number"
                value={bpm}
                onChange={e => setbpm(e.target.valueAsNumber)} />
                </td>
                <td>
            <input
                type="number"
                value={capo}
                onChange={e => setcapo(e.target.valueAsNumber)} />
                </td>
                <td>
             <input
                type="number"
                value={difficulty}
                onChange={e => setdifficulty(e.target.valueAsNumber)} />
                </td>
                <td>
             <input
                type="number"
                value={year}
                onChange={e => setyear(e.target.valueAsNumber)} />
                </td>

            <td classtitle="no-border-row">
            <button 
                onClick={addSong}
            >Add</button>
            </td>
            </tr>
            
            </tbody>
        </table>
        </div>

        
    );
}

export default AddSongPage;