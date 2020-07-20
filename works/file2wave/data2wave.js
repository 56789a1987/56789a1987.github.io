var data2wave = function (rate, data) {
	var size = data.length,
		chunksize = 12 + 24 + 8 + size;
	var header = [
		// Header
		0x52, 0x49, 0x46, 0x46, // "RIFF"
		chunksize & 0xff, (chunksize >> 8) & 0xff, (chunksize >> 16) & 0xff, (chunksize >> 24) & 0xff, // ChunkSize, which is filesize - (ChunkID and Chunksize)
		0x57, 0x41, 0x56, 0x45, // "WAVE"

		// fmt
		0x66, 0x6d, 0x74, 0x20, // "fmt "
		0x10, 0x00, 0x00, 0x00, // PCM subchunk size = 16
		0x01, 0x00, // AudioFormat = 1 (PCM)
		0x01, 0x00, // Number of Channels = 1
		rate & 0xff, (rate >> 8) & 0xff, (rate >> 16) & 0xff, (rate >> 24) & 0xff, // Sample Rate
		rate & 0xff, (rate >> 8) & 0xff, (rate >> 16) & 0xff, (rate >> 24) & 0xff, // Byte Rate = SampleRate * NumChannels * BitsPerSample / 8
		0x01, 0x00, // BlockAlign = NumChannels * BitsPerSample / 8
		0x08, 0x00, // Bits per Sample = 8

		// data
		0x64, 0x61, 0x74, 0x61, // "data"
		size & 0xff, (size >> 8) & 0xff, (size >> 16) & 0xff, (size >> 24) & 0xff // Data Size
	]
	var out = header;
	if(typeof data == "string") {
		for(var i = 0; i < data.length; i++) out.push(data.charCodeAt(i));
	}
	else out = out.concat(data);
	
	var ia = new Uint8Array(out.length);
	for (var i = 0; i < out.length; i++) ia[i] = out[i];
	var blob = new Blob([ia], {type: "audio/x-wav"}),
	blobUrl = URL.createObjectURL(blob);
	return blobUrl;
}
